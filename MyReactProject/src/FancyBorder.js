export default function FancyBorder({children}) {
    return (
        <div style={{
            border: '10px dashed grey',
            padding: 10,
            boxShadow: '0 0 6px -1px black'
        }}>
            {children}
        </div>
    );
}