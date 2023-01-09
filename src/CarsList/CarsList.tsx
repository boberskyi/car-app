import sCars from './cars.module.css';

type carsType = {
  id: number,
  make: string,
  model: string,
  year: number,
  startMilage: number,
  newMilage: number,
  oilChange: number
}

type carsPropsType = {
  carInfo: carsType[]
}

export const CarsList = (props: carsPropsType) => {
  return (
    <div className={sCars.cars}>
      {props.carInfo.map(car => {
        return (
          <table key={car.id}>
            <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Starting milage</th>
              <th>New milage</th>
              <th>oilChange</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.startMilage}</td>
              <td>{car.newMilage}</td>
              <td>{car.oilChange}</td>
            </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        )
      })}

    </div>
  )
}