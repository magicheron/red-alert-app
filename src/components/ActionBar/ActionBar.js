import React from 'react';
import './ActionBar.css';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SaveIcon from '@material-ui/icons/Save';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const inboxActions = [
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' }
];

const reminderActions = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' }
];

const useStyles = makeStyles(theme => ({
  button: {
    justifySelf: 'center'
  }
}));

function ActionBar(props) {
  const classes = useStyles();
  const [inboxActionsOpen, setInboxActionsOpen] = React.useState(false);
  const [reminderActionsOpen, setReminderActionsOpen] = React.useState(false);

  const handleInboxClick = () => {
    setInboxActionsOpen(prevOpen => !prevOpen);
  };

  const handleInboxClose = () => {
    setInboxActionsOpen(false);
  };

  const handleReminderClick = () => {
    setReminderActionsOpen(prevOpen => !prevOpen);
  };

  const handleReminderClose = () => {
    setReminderActionsOpen(false);
  };

  return (
    <div className="ActionBar">
      <SpeedDial
        className={classes.button}
        ariaLabel="Inbox options"
        icon={<SpeedDialIcon />}
        onBlur={handleInboxClose}
        onClick={handleInboxClick}
        onClose={handleInboxClose}
        open={inboxActionsOpen}
      >
        {inboxActions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleInboxClick}
          />
        ))}
      </SpeedDial>

      <SpeedDial
        className={classes.button}
        ariaLabel="Inbox options"
        icon={<SpeedDialIcon />}
        onBlur={handleReminderClose}
        onClick={handleReminderClick}
        onClose={handleReminderClose}
        open={reminderActionsOpen}
      >
        {reminderActions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleReminderClick}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default ActionBar;
