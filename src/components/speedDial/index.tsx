import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { actions } from '../../constants';
import './index.scss'
export const SpeedDialComp = () => {

  const ToolIcon = ({data}: any) => (
    <button onClick={() => window.open(data.link)} className='icon-button'><img src={data.icon} className='image-icon' alt={data.name} /></button>
  )
  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      className='speed-dial'
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={<ToolIcon data={action} />}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}