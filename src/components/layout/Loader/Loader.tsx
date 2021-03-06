import { FC } from "react";
import "./Loader.scss";

const Loader: FC = () => {
    return (
        <div className="Loader">
            <div className="LoaderContainer">
                <svg viewBox="0 0 464 464" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ReceiptContainer">
                        <g id="ReceiptEnd">
                            <path id="Vector"
                                d="M416.002 296.99L389.339 256.992H362.668L336.004 296.99L309.341 256.992H304.005V464.985C383.53 464.985 448.001 400.514 448.001 320.989V256.992H442.665L416.002 296.99Z"
                                fill="#2D75BB" />
                        </g>

                        <g id="Receipt">
                            <path id="Vector_2"
                                d="M304.005 463.985H128.011C67.1969 465 17.0618 416.541 16.015 355.723V0H304.005V463.985Z"
                                fill="#87CEE9" />
                        </g>

                        <g id="ReceiptStart">
                            <path id="Vector_3"
                                d="M88.0126 47.9984H232.008C245.261 47.9984 256.007 58.7442 256.007 71.9976V103.997C256.007 117.25 245.261 127.996 232.008 127.996H88.0126C74.7591 127.996 64.0134 117.25 64.0134 103.997V71.9976C64.0134 58.7442 74.7591 47.9984 88.0126 47.9984Z"
                                fill="#238892" />
                            <path id="Vector_4" d="M96.0123 71.9976H112.012V87.9976H96.0123V71.9976Z" fill="white" />
                            <path id="Vector_5" d="M112.012 87.9971H128.012V103.997H112.012V87.9971Z" fill="white" />
                            <path id="Vector_6" d="M144.011 71.9976H160.011V87.9976H144.011V71.9976Z" fill="white" />
                            <path id="Vector_7" d="M160.01 87.9971H176.01V103.997H160.01V87.9971Z" fill="white" />
                            <path id="Vector_8" d="M192.009 71.9976H208.009V87.9976H192.009V71.9976Z" fill="white" />
                            <path id="Vector_9" d="M208.009 87.9971H224.009V103.997H208.009V87.9971Z" fill="white" />
                        </g>

                        <g id="ReceiptContent">
                            <path id="Vector_10" d="M72.0131 199.993H168.01V215.993H72.0131V199.993Z" fill="#2D75BB" />
                            <path id="Vector_11" d="M232.008 199.993H248.008V215.993H232.008V199.993Z" fill="#2D75BB" />
                            <path id="Vector_12" d="M72.0131 231.992H200.009V247.992H72.0131V231.992Z" fill="#2D75BB" />
                            <path id="Vector_13" d="M232.008 231.992H248.008V247.992H232.008V231.992Z" fill="#2D75BB" />
                            <path id="Vector_14" d="M72.0131 263.991H184.009V279.991H72.0131V263.991Z" fill="#2D75BB" />
                            <path id="Vector_15" d="M232.008 263.991H248.008V279.991H232.008V263.991Z" fill="#2D75BB" />
                            <path id="Vector_16" d="M72.0131 295.99H200.009V311.99H72.0131V295.99Z" fill="#2D75BB" />
                            <path id="Vector_17" d="M232.008 295.99H248.008V311.99H232.008V295.99Z" fill="#2D75BB" />
                            <path id="Vector_18" d="M96.0123 391.987H120.012V407.987H96.0123V391.987Z" fill="#2D75BB" />
                            <path id="Vector_19" d="M136.011 391.987H160.011V407.987H136.011V391.987Z" fill="#2D75BB" />
                            <path id="Vector_20" d="M176.01 391.987H200.01V407.987H176.01V391.987Z" fill="#2D75BB" />
                            <path id="Vector_21" d="M216.008 391.987H240.008V407.987H216.008V391.987Z" fill="#2D75BB" />
                            <path id="Vector_22" d="M256.007 391.987H280.007V407.987H256.007V391.987Z" fill="#2D75BB" />
                            <path id="Vector_23" d="M56.0136 391.987H80.0136V407.987H56.0136V391.987Z" fill="#2D75BB" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Loader;