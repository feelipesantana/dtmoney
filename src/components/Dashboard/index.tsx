import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard(){

    return(
        <div id="main">
            <Container>
               <Summary />
               <TransactionsTable />
            </Container>
        </div>

    );
}