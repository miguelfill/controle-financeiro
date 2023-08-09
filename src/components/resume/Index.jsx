import Cards from "../cards/Cards"
import * as C from "./indexStyle"
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Index = ({income, expense, total}) => {
  return (
    <C.ContainerResume>
      <Cards title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
      <Cards title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <Cards title="Total" Icon={FaDollarSign} value={total}/>
    </C.ContainerResume>
  )
}

export default Index