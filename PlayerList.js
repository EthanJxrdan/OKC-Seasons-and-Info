import React from "react";
import { useState, useEffect } from "react";
import Player from "./Player";
import { BalldontlieAPI } from "@balldontlie/sdk";

function PlayerInfo({ playerId }) {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = new BalldontlieAPI({
      apiKey: "${process.env.OKC_API_KEY}",
    });

    const getPlayer = async () => {
      try {
        const response = await api.nba.getPlayer(playerId);
        setPlayer(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getPlayer();
  }, [playerId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {player && (
        <>
          <h1>
            {player.first_name} {player.last_name}
          </h1>
          <p>Position: {player.position}</p>
          <p>Height: {player.height}</p>
          <p>Weight: {player.weight}</p>
          <p>Jersey Number: {player.jersey_number}</p>
          <p>College: {player.college}</p>
        </>
      )}
    </div>
  );
}

function PlayerList() {
  return (
    <div className="text-center">
      <Player id={1} />
      <img src="../public/SGACard.jpg" />
      {PlayerInfo({ playerId: 175 })}
      <Player id={2} />
      <img src="../public/chet7.png" />
      {PlayerInfo({ playerId: 38017685 })}
      <Player id={3} />
      <img src="../public/jDUB.jpg" />
      {PlayerInfo({ playerId: 38017703 })}
      <Player id={4} />
      <img src="../public/luDort.png" />
      {PlayerInfo({ playerId: 666541 })}
      <Player id={5} />
      <img src="../public/iHart.jpg" />
      {PlayerInfo({ playerId: 201 })}
      <Player id={6} />
      <img src="../public/wiggs.png" />
      {PlayerInfo({ playerId: 17896078 })}
      <Player id={7} />
      <img src="../public/Cwall.png" />
      {PlayerInfo({ playerId: 56677833 })}
      <Player id={8} />
      <img src="../public/iJoe.png" />
      {PlayerInfo({ playerId: 3547272 })}
      <Player id={9} />
      <img src="../public/alexC.jpg" />
      {PlayerInfo({ playerId: 89 })}
    </div>
  );
}

export default PlayerList;
