import {Button, Color, Text, Margin, Select} from '@ds.e/react/lib';

function App() {

  return (
    <>
      <div>
        <Margin bottom space='xxxl'>
          <Text size='xl'>This is a Text from react package</Text>
        </Margin>
        <h1>Hello MonoRepo</h1>
        <Color hexCode='#FF0000' height={'xxl'} width={'xxxl'}></Color>
        <Button title='btn' onClick={()=>{alert('hello')}}>Click Me!</Button>

        <Select 
          options={[
            {label:'red',value: 'red'},
            {label:'green',value: 'green'},
            {label:'blue',value: 'blue'},
            {label:'yellow', value: 'yellow'},
            {label:'magenta', value: 'magenta'}
          ]} 
          label='Select a color' 
        />
      </div>
    </>
  )
}

export default App
