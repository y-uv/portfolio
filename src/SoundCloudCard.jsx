import React from "react";

const SoundCloudCard = () => {
  return (
    <div className="max-w-lg bg-black text-white p-8 rounded-lg shadow-lg">
      <iframe
        title="SoundCloud Playlist"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1707830133&color=%23ffffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        className="mt-4"
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/yuveee"
          title="yuval"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          yuval
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/yuveee/sets/yuvhits"
          title="yuvhits"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          yuvhits
        </a>
      </div>
    </div>
  );
};

export default SoundCloudCard;
