import { Button } from "./Button"
import { ReactElement } from 'react';

type Props = {
    open?: boolean;
    btnCancelOnClick?: any;
    title?: string;
    body?: ReactElement;
    btnCancelText: string;
    secondBtntext?: string;
    secondBtnOnClick?: any;
}

export const Modal = ({ open = false, btnCancelOnClick, title = "Modal Title", body, btnCancelText, secondBtntext, secondBtnOnClick }: Props) => {
    return (
        open ? (
            <div className="modal-container">
                <div className="modal-content">
                    <h1 className="modal-title">{title}</h1>

                    <div className="modal-body">
                        {body}
                    </div>

                    <div className="modal-footer">
                        <Button className="btn-secondary" onClick={btnCancelOnClick}>{btnCancelText}</Button>
                        {secondBtntext && <Button className="btn-primary" onClick={secondBtnOnClick}>{secondBtntext}</Button>}
                    </div>
                </div>
            </div>
        ) : null
    )
}
