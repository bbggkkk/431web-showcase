function Logo(props:any) {
    const color = props.color ? props.color : '#1a1a1a';

    return (
        <svg className={props.className ? props.className : false} id="Logo" xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="0 0 48 16">
            <path id="_4" data-name="4" d="M0,0V16H16Z" fill={color}/>
            <rect id="_31" data-name="31" width="16" height="4" transform="translate(16)" fill={color}/>
            <rect id="_32" data-name="32" width="16" height="4" transform="translate(16 6)" fill={color}/>
            <rect id="_33" data-name="33" width="16" height="4" transform="translate(16 12)" fill={color}/>
            <path id="Round" d="M136,0h0a8,8,0,0,0-8,8h0a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8h0A8,8,0,0,0,136,0Zm4,8a4,4,0,0,1-8,0h0a4,4,0,1,1,8,0Z" transform="translate(-96)" fill={color}/>
            <rect id="Dot" width="2" height="2" rx="1" transform="translate(46 14)" fill={color}/>
        </svg>
    );
}

export default Logo;