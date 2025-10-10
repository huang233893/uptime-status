import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from 'react';
import { GetMonitors } from '../common/uptimerobot';
import { formatDuration, formatNumber } from '../common/helper';
import Link from './link';

function UptimeRobot({ apikey }) {
  const status = {
    ok: '正常',
    down: '无法访问',
    unknow: '未知'
  };

  const { CountDays, ShowLink } = window.Config;
  const [monitors, setMonitors] = useState();

  useEffect(() => {
    GetMonitors(apikey, CountDays).then(setMonitors);
  }, [apikey, CountDays]);

  if (monitors) return monitors.map((site) => (
    <div key={site.id} className='site'>
      <div className='meta'>
        <span className='name' dangerouslySetInnerHTML={{ __html: site.name }} />
        {ShowLink && <Link className='link' to={site.url} text={site.name} />}
        <span className={'status ' + site.status}>{status[site.status]}</span>
      </div>
      <div className='timeline'>
        {site.daily.map((data, index) => {
          let status = '';
          let text = data.date.format('YYYY-MM-DD ');
          if (data.uptime >= 100) {
            status = 'ok';
            text += `可用率 ${formatNumber(data.uptime)}%`;
          }
          else if (data.uptime <= 0 && data.down.times === 0) {
            status = 'none';
            text += '无数据';
          }
          else {
            status = 'down';
            text += `故障 ${data.down.times} 次，累计 ${formatDuration(data.down.duration)}，可用率 ${formatNumber(data.uptime)}%`;
          }
          return (<i key={index} className={status} data-tip={text} />)
        })}
      </div>
      <div className='summary'>
        <span>今天</span>
        <span>
          {site.total.times
            ? `最近 ${CountDays} 天故障 ${site.total.times} 次，累计 ${formatDuration(site.total.duration)}，平均可用率 ${site.average}%`
            : `最近 ${CountDays} 天可用率 ${site.average}%`}
        </span>
        <span>{site.daily[site.daily.length - 1].date.format('YYYY-MM-DD')}</span>
      </div>
      <ReactTooltip className='tooltip' place='top' type='dark' effect='solid' />
    </div>
  ));

  // 修正加载动画的样式写法，避免语法错误
  else return (
    <div className='site' style={{ textAlign: 'center', padding: '40px 0' }}>
      <div style={{
        width: '40px',
        height: '40px',
        margin: '0 auto',
        border: '3px solid #f3f3f3',
        borderTop: `3px solid ${window.Config.PrimaryColor || '#3B82F6'}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{ marginTop: '15px', color: '#6B7280' }}>正在获取状态数据...</p>
    </div>
  );
}

// 确保导出语句在文件最底部
export default UptimeRobot;
