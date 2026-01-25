import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { actions } from '../../constants';
import './index.scss'
export const SpeedDialComp = () => {

  const ToolIcon = ({data}: {data: any}) => (
    <button 
      onClick={() => window.open(data.link)} 
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(data.link);
        }
      }}
      className='icon-button'
      aria-label={`Visit ${data.name} (opens in new tab)`}
      tabIndex={0}
    >
      <img src={data.icon} className='image-icon' alt={`${data.name} icon`} />
    </button>
  )
  
  return (
    <SpeedDial
      ariaLabel="Quick access to social media and contact options"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      className='speed-dial'
    >
      {actions.map((action, index) => (
        <SpeedDialAction
          key={`${action.name}-${index}`}
          icon={<ToolIcon data={action} />}
          tooltipTitle={action.name}
          aria-label={`Quick access to ${action.name}`}
        />
      ))}
    </SpeedDial>
  )
}