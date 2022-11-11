import React from 'react'

const HRLine = () => {
    const styles = {
        Line: {
            height: '2px',
            background: '#333333',
            borderRadius: '2px',
        }
    }

    return (
        <div style={styles.Line}></div>
    )
}

export default HRLine