import { CountState } from "../types"
import { sleep } from "./sleep"

export const getCountChips = async (countType: CountState) => {

    // const resp = await fetch(`host/countchips?count_type=${countType}`,)
    // const data = await resp.json()
    await sleep(2)

    return {
        type: countType,
        count: countType === 'BLACK' ? 5 : 3
    }
}
