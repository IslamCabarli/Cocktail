import { Pagination, PaginationItem } from "@mui/material"

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function LetterNav({setLetter}) {
    return (
        <Pagination
            variant="outlined" shape="rounded"
            count={alphabet.length} boundaryCount={alphabet.length}
            hidePrevButton={true} hideNextButton={true}
            renderItem={item => (<PaginationItem {...item} page={alphabet[item.page - 1]} /> )}
            onChange={e => setLetter(e.target.textContent)}
        />
    )
}

export default LetterNav