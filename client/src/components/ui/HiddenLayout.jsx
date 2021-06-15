const HiddenLayout = ({ active, children })=> active ? (children[0] || children) : (children[1] || <></>);

export default HiddenLayout;