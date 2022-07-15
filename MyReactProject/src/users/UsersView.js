import SearchForm from "./SearchForm";
import UsersTable from "./UsersTable";
import {Stack} from "react-bootstrap";

export default function UsersView() {
    return (
        <Stack gap={4} className={"m-4"}>
            <SearchForm/>
            <UsersTable/>
        </Stack>
    );
}