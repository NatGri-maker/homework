function Footer({text}){
    const style={
        padding: 50,
        backgroundColor:'gray',
        textAlign:'centre',
    };
    return (
        <footer style={style} >{text}</footer>
    );

}

export default Footer;