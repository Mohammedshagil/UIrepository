import logo from './logo.svg';
import './App.css';
import 'devextreme/dist/css/dx.light.css'
import React from 'react';

 
import Button from 'devextreme-react/button';
import Chart, {
    ArgumentAxis,
    Series,
    Legend
} from 'devextreme-react/chart';

const data = [{
    arg: 1990,
    val: 5320816667
}, {
    arg: 2000,
    val: 6127700428
}, {
    arg: 2010,
    val: 6916183482
}];

class App extends React.Component {
    render() {
      return (
          <div>
          
          
            <Button
                text="Click me"
                onClick={this.sayHelloWorld}
          />
          <br />
          <Chart dataSource={data}>
                <ArgumentAxis tickInterval={10} />
                <Series type="bar" />
                <Legend visible={false} />
            </Chart>
          </div>
        );
    }
 
    sayHelloWorld() {
        alert('Hello world!')
    }
}
 
export default App;