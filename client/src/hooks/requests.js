const PORT = 5000;
const API_URL = `http://localhost:${PORT}`;
async function httpGetPlanets() {
  const res = await fetch(`${API_URL}/plantes`);
  return await res.json();
}

async function httpGetLaunches() {
  const res = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await res.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(launch)
    })
  }
  catch (err) {
    return {
      ok: false
    }
  }

  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {

  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete"
    })
  }
  catch (err) {
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};