import React from 'react'

const PastTask = ({match, tasks}) => {
    const filteredList = tasks.filter(task => task.name.toLowerCase() === match.params.name)
    const pastList = filteredList.slice(0, filteredList.length-1).reverse()
    return (
        <div>
            <h3>{pastList[0].name} Past Events:</h3>
            <ul>
                {pastList.map(task => <li>{task.date}</li> )}
            </ul>
        </div>
    )
}

export default PastTask
