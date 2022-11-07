export default function Footer({text}){
const style={
    padding:40,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',

};
return(
    <footer style={style}>
        {text}
    </footer>
);
}