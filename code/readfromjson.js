
export async function readFromJSON(filepath) {
    try {
        const response = await fetch(filepath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}