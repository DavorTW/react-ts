    import type { CSSProperties } from "react";
    
    const firstName = 'Davor';
    const lastName = 'Insaurralde';

    const favoriteGames = ['Elden Ring', 'Smash', 'GTA'];
    const isActive = true;

    const address = {
        zipCode: 'ABC-123',
        country: 'Taiwan',
    }

    const myStyles: CSSProperties = {
                backgroundColor: '#3f3f3f',
                borderRadius: 10,
                padding: 10,
                marginTop: 20,
            };


export function MyAwesomeComponent() {



    return (
        <div data-testid="div-app">
            <h1>{firstName}</h1>
            <h3 data-testid="last-name-title">{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>

            <h2>{isActive ? 'Activo' : 'No activo'}</h2>
            <p
            style={myStyles}
            >{JSON.stringify(address) }</p>
        </div>
    )
}