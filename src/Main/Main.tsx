import {CarsList} from "../CarsList/CarsList";

export const Main = () => {
  const carInfoList = [
    {id: 1, make: 'Honda', model: 'Civic', year: 2001, startMilage: 300000, newMilage: 320000, oilChange: 330000},
    {id: 2, make: 'Toyota', model: 'Avensis', year: 2004, startMilage: 275000, newMilage: 283000, oilChange: 285000},
    {id: 3, make: 'Peugeot', model: '307', year: 2001, startMilage: 215000, newMilage: 225000, oilChange: 225500},
  ]
  return (
    <main>
      <CarsList carInfo={carInfoList}/>
    </main>
  )
}