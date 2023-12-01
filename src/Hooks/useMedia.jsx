
import React from "react"

export const useMedia = () => {

    const [match, setMatch] = React.useState(null)

    React.useEffect(() => {
        function chageMatch() {
            const {matches} = window.matchMedia(media)
            setMatch(matches)
        }
        window.addEventListener('resize', chageMatch)
        return() => {
            window.removeEventListener('resize', chageMatch)
        }
    })

    return(
        <div>

        </div>
    )
}