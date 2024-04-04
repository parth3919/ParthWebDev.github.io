import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Badge, NavLink } from 'react-bootstrap';
import './NotificationIcon.css';

const NotificationIcon = () => {
    const [notificationCount, setNotificationCount] = useState(4);
    const [isPanelOpen, setPanelOpen] = useState(false);

    const handleNotificationClick = () => {
        setPanelOpen((prevIsPanelOpen) => !prevIsPanelOpen);

        // Reset the notification count when opening the panel
        if (!isPanelOpen) {
            setNotificationCount(0);
        }
    };

    return (
        <div className="icon-badge" onClick={handleNotificationClick}>
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
            {notificationCount > 0 && (
                <Badge pill bg="danger" className="badge-indicator">
                    {notificationCount}
                </Badge>
            )}

            {isPanelOpen && (
                <div className="notification-panel">
                    <NavLink smooth={true} duration={1000}>Notification</NavLink>
                    <NavLink smooth={true} duration={1000}>Notification 2</NavLink>
                    <NavLink smooth={true} duration={1000}>Notification 3</NavLink>
                    <NavLink smooth={true} duration={1000}>Notification 4</NavLink>
                </div>
            )}
        </div>
    );
};

export default NotificationIcon;
