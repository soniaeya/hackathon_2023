import ExpenseItem from './Components/ExpenseItem';

function App() {

    const inventory = [{
        id:"first", name: "alison"

    }, {
        id: 'second',
        name: 'sonia',

    }]
    const doing = () => {
        console.log('doing is done');
    };


    return(
        <div>
            <h1>Hello World!</h1>
            <p>This is also visible</p>
            <ExpenseItem name={inventory[0].name}/>

        </div>

    )
}
export default App;