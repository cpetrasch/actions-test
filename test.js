const url = "https://berufemap.de/verify_events/input.json"; // anpassen!

async function run() {
    console.log("Rufe Strato-Server auf:", url);

    const res = await fetch(url);
    if (!res.ok) {
        console.error("Fehler beim Abruf:", res.status, res.statusText);
        process.exit(1);
    }

    const data = await res.json();
    console.log("Antwort vom Strato-Server:");
    console.log(data);
}

run().catch(err => {
    console.error("Unerwarteter Fehler:", err);
    process.exit(1);
});

