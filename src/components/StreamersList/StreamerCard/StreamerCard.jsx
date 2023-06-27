function StreamerCard() {
  return (
    <li>
      <span>Name of streamer</span>
      <select>
        <option value="twitch">Twitch</option>
        <option value="youtube">YouTube</option>
        <option value="tiktok">TikTok</option>
        <option value="kick">Kick</option>
        <option value="rumble">Rumble</option>
      </select>
      <span>
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero corrupti earum distinctio totam incidunt obcaecati accusamus
        molestiae similique cupiditate minus quos, dolores rerum dicta ipsum
        illum nisi voluptatum quo voluptate?
      </span>
    </li>
  );
}

export default StreamerCard;
