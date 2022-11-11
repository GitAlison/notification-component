import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GrClose } from 'react-icons/gr'
import './styles.scss'

interface NotificationItem {
    text: string,
    url?: string,
    textButton?: string,
}

interface Props {
    text?: string,
    notifications: NotificationItem[],
}

interface State {
    text?: string,
    notifications: NotificationItem[],
    actualNotification: number
}

export class Notification extends React.Component<Props>{

    state: State = {
        text: '',
        notifications: [],
        actualNotification: 0,
    }
    buttonStyle = { color: "#e2e2e2", fontSize: '1.8rem' };
    dangerColor = '#bb2828'
    successColor = '#28bb74'
    closeButtonStyle = { ...this.buttonStyle, fontSize: '1.4rem' }


    constructor(props: Props) {
        super(props)
        this.state = {
            text: 'texto',
            notifications: props.notifications,
            actualNotification: 0
        }

    }

    next = (): void => {
        if ((this.state.actualNotification + 1) >= this.state.notifications.length) {
            this.setState({ actualNotification: 0 });
        } else {
            this.setState({ actualNotification: this.state.actualNotification + 1 });
        }
    }
    previous = (): void => {
        if (this.state.actualNotification == 0) {
            this.setState({ actualNotification: this.state.notifications.length - 1 });
        } else {
            this.setState({ actualNotification: this.state.actualNotification - 1 });
        }
    }
    close = (index: any) => {
        this.state.notifications.splice(index, 1)
        this.setState({ notifications: this.state.notifications });
        if (this.state.actualNotification + 1 >= this.state.notifications.length) {
            this.setState({ actualNotification: this.state.notifications.length - 1 });
        }
    }
    navigateURL = (): void => {
        window.open(this.state.notifications[this.state.actualNotification].url, "_blank");
    }

    render() {
        if (this.state.notifications.length) {
            return (
                <div className="notification-cascade">
                    <div className="text-content">
                        <div>
                            {this.state.notifications[this.state.actualNotification].text}
                        </div>
                        {
                            this.state.notifications[this.state.actualNotification].url ?
                                <div className="custom-buttons">
                                    <button onClick={this.navigateURL} style={{ backgroundColor: this.dangerColor, color: this.buttonStyle.color }}>
                                        {this.state.notifications[this.state.actualNotification].textButton}
                                    </button>
                                </div>
                                : null

                        }


                    </div>

                    <div className="buttons-content">
                        <div className="arrows-content">
                            <button onClick={this.previous}>
                                <IoIosArrowBack style={this.buttonStyle}></IoIosArrowBack>
                            </button>
                            {this.state.actualNotification + 1}/{this.state.notifications.length}
                            <button onClick={this.next}>
                                <IoIosArrowForward style={this.buttonStyle}></IoIosArrowForward>
                            </button>
                        </div>
                        <button className="close-button" onClick={() => this.close(this.state.actualNotification)} >
                            <GrClose style={this.closeButtonStyle}></GrClose>
                        </button>
                    </div>
                </div>
            )
        }
    }

}