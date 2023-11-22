import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";

export const Layout = () => {
    return (
        <Box>
            <Box display="flex" gap={2}>
                <Link to="/" title="Catalog">Catalog</Link>
                <Link to="/cart" title="Cart">Cart</Link>
            </Box>
            <Box p={10}>
                <Outlet />
            </Box>
        </Box>
    )
}