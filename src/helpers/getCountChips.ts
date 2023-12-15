import { CountState } from "../types"

export const getCountChips = async (countType: CountState) => {

    const resp = await fetch(`${import.meta.env.VITE_HOST_SERVER}/countchips?count_type=${countType}`,)

    const countChipsHeader = resp.headers.get('count_chips');
    const countTypeHeader = resp.headers.get('count_type');

    const imgUrl = resp.url

    return {
        type: countTypeHeader,
        count: countChipsHeader,
        imgUrl
    }
}