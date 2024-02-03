import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '1500px',backgroundColor:'whitesmoke',borderradius:'10px',border:'solid lightgray 1px' }}>
      <Card.Body style={{ heigth:'1000px'}}>
        <center><Card.Title  >Components</Card.Title></center>
        <Card.Text>
         <center>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</center>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;