import React from "react";

const SoundCloudCard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg bg-white text-white p-2 rounded-lg shadow-lg flex flex-col items-center">
        <iframe
          title="SoundCloud Playlist"
          width="100%"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1707830133&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&buying=false&sharing=false&download=false&show_playcount=false&show_user=false&show_reposts=false&show_teaser=false&show_comments=false&show_playcount=false"
        ></iframe>
        <div
          className="mt-4 text-center"
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
            style={{ color: "#000000", textDecoration: "none" }}
          >
            yuval
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/yuveee/sets/yuvhits"
            title="yuvhits"
            target="_blank"
            style={{ color: "#000000", textDecoration: "none" }}
          >
            yuvhits
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudCard;
