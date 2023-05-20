// // jQuery
// $(function() {
//     // 获取 audio 元素和 control 元素
//     var audio = $("#audio")[0];
//     var control = $(".play");
//     var next= $(".next");
//     // 给 control 元素添加点击事件
//     control.click(function() {
//       // 判断 audio 元素的播放状态
//       if (audio.paused) {
//         // 如果是暂停状态，就播放音乐，并将 span 的类名切换为 icon-zanting
//         audio.play();
//         control.find("span.iconfont").toggleClass("icon-bofang icon-zanting");
//       } else {
//         // 如果是播放状态，就暂停音乐，并将 span 的类名切换为 icon-bofang
//         audio.pause();
//         control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
//       }
//     });
//     $(audio).on("ended", function() {
//       // 当音乐播放完毕时，将 span 的类名切换为 icon-bofang
//       control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
//     });
//   });
$(function() {
  // 获取 audio 元素和 control 元素
  var audio = $("#audio")[0];
  var control = $(".play");
  var next = $(".next");
  var last = $(".last");

  // 创建一个数组，包含所有歌曲的 src 属性
  var playlist = [
    {
      songSrc: "static\\media\\audio\\song1.mp3",
      imgSrc: "static\\media\\img\\inner-img1.jpg",
      songName: "Sunflower Feelings",
      artist: "Kuzu Mellow",
      lyrics: `
        <p>...</p>
        <p>We've been dancing for so long under the stars</p>
        <p>I feel as the grass will cut through my skin</p>
        <p>All the pills we take have seem to prolong</p>
        <p>Our existence but I don't feel alright</p>
        <p>I would rather be alone than have you</p>
        <p>Everytime I speak I feel myself fall</p>
        <p>Do you wish to find the truth in my lies</p>
        <p>Sorry darling there's no truth here, no</p>
        <p>It's just the two of us my dear</p>
        <p>Listen to me don't you hear?</p>
        <p>I only fell for you </p>
        <p>...</p>
      `
    },
    {
      songSrc: "static\\media\\audio\\song2.mp3",
      imgSrc: "static\\media\\img\\inner-img2.jpg",
      songName: "헤어지지 못하는 여자, 떠나가지 못하는 남자",
      artist: "리쌍/정인",
      lyrics: `
        <p>...</p>
        <p>헤어지지 못하는 여자 떠나가지 못하는 남자</p>
        <p>无法分手的女人，无法离开的男人</p>
        <p>사랑하지 않는 우리 그래서 No No No No No No</p>
        <p>不再相爱的我们No No No No No No</p>
        <p>헤어지지 못하는 여자 떠나가지 못하는 남자</p>
        <p>사랑하지 않는 우리 그래서 No No No No No No</p>
        <p>팔짱을 끼고 한 장의 사진에 추억을 담고</p>
        <p>挽着手拍着的照片中，留下的回忆</p>
        <p>누구의 잘못인지 사랑하긴 하는데 Babe~</p>
        <p>是谁的错,我们曾这么相爱Babe~</p>
        <p>모든 게 그대론데 우리는 변해있네</p>
        <p>...</p>
      `
    },
    {
      songSrc: "static\\media\\audio\\song3.mp3",
      imgSrc: "static\\media\\img\\inner-img3.jpg",
      songName: "Paris In The Rain",
      artist: "Lauv",
      lyrics: `
        <p>...</p>
        <p>All I know is We could go anywhere we could do</p>
        <p>Anything girl whatever the mood we're in</p>
        <p>All I know is</p>
        <p>Getting lost late at night under stars</p>
        <p>Finding love standing right where we are your lips</p>
        <p>They pull me in the moment</p>
        <p>You and I alone and</p>
        <p>People may be watching I don't mind,cause</p>
        <p>Anywhere with you feels right</p>
        <p>Anywhere with you feels like</p>
        <p>Paris in the rain</p>
        <p>...</p>
      `
    },
    {
      songSrc: "static\\media\\audio\\song4.mp3",
      imgSrc: "static\\media\\img\\inner-img4.jpg",
      songName: "WALLS",
      artist: "sapientdream",
      lyrics: `
        <p>...</p>
        <p>If we fight</p>
        <p>That the walls we've built so high have fallen so low</p>
        <p>Falling so low</p>
        <p>If we fight</p>
        <p>That the walls we've built so high have fallen so low</p>
        <p>Oh-oh</p>
        <p>If we fight</p>
        <p>That the walls we've built so high have fallen so low</p>
        <p>Falling so low</p>
        <p>如果我们行同路人</p>
        <p>我们之间就筑起了疏远的高墙</p>
        <p>不再往来</p>
      `
    },
    {
      songSrc: "static\\media\\audio\\song5.mp3",
      imgSrc: "static\\media\\img\\inner-img5.jpg",
      songName: "Differences",
      artist: "Ginuwine",
      lyrics: `
        <p>...</p>
        <p>......</p>
        <p>.........</p>
        <p>............</p>
        <p>...............</p>
        <p></p>
        <p>纯音乐,请欣赏...</p>
        <p></p>
        <p>...............</p>
        <p>............</p>
        <p>.........</p>
        <p>......</p>
        <p>...</p>
      `
    },
    {
      songSrc: "static\\media\\audio\\song6.mp3",
      imgSrc: "static\\media\\img\\inner-img6.jpg",
      songName: "——",
      artist: "——",
      lyrics: `
  
      `
    },
  ];

  // 给 control 元素添加点击事件
  control.click(function() {
    // 判断 audio 元素的播放状态
    if (audio.paused) {
      // 如果是暂停状态，就播放音乐，并将 span 的类名切换为 icon-zanting
      audio.play();
      control.find("span.iconfont").toggleClass("icon-bofang icon-zanting");
    } else {
      // 如果是播放状态，就暂停音乐，并将 span 的类名切换为 icon-bofang
      audio.pause();
      control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
    }
  });

  $(audio).on("ended", function() {
    // 当音乐播放完毕时，将 span 的类名切换为 icon-bofang
    control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
  });

  // 给 next 元素添加点击事件
  next.click(function() {
     // 获取当前歌曲的 src 属性
    var currentSongSrc = $("#audio").attr("src");
    // 计算当前歌曲在 playlist 数组中的索引
    var currentSongIndex = playlist.findIndex(function(item) {
      return item.songSrc === currentSongSrc;
    });
    // 计算下一首歌曲的索引
    var nextSongIndex = (currentSongIndex + 1) % playlist.length;
    // 获取下一首歌曲的信息
    var nextSong = playlist[nextSongIndex];
    // 更新 audio 元素的 src 属性、图片的 src 属性、歌名和歌手的文本内容和歌词的 HTML 内容
    $("#audio").attr("src", nextSong.songSrc);
    $(".inner-img img").attr("src", nextSong.imgSrc);
    $(".m-name span:eq(0)").text(nextSong.songName);
    $(".m-name span:eq(1)").text(nextSong.artist);
    $(".lyrics").html(nextSong.lyrics);
    // 播放音乐
    audio.play();
    // 将 span 的类名切换为 icon-zanting
    control.find("span.iconfont").removeClass("icon-bofang").addClass("icon-zanting");
  });
  last.click(function() {
    // 获取当前歌曲的 src 属性
    var currentSongSrc = $("#audio").attr("src");
    // 计算当前歌曲在 playlist 数组中的索引
    var currentSongIndex = playlist.findIndex(function(item) {
      return item.songSrc === currentSongSrc;
    });
    // 计算下一首歌曲的索引
    var nextSongIndex = (currentSongIndex - 1) % playlist.length;
    // 获取下一首歌曲的信息
    var nextSong = playlist[nextSongIndex];
    // 更新 audio 元素的 src 属性、图片的 src 属性、歌名和歌手的文本内容和歌词的 HTML 内容
    $("#audio").attr("src", nextSong.songSrc);
    $(".inner-img img").attr("src", nextSong.imgSrc);
    $(".m-name span:eq(0)").text(nextSong.songName);
    $(".m-name span:eq(1)").text(nextSong.artist);
    $(".lyrics").html(nextSong.lyrics);
    // 播放音乐
    audio.play();
    // 将 span 的类名切换为 icon-zanting
    control.find("span.iconfont").removeClass("icon-bofang").addClass("icon-zanting");
  });
  
  audio.addEventListener('ended', function() {
    // 执行切换到下一首歌曲的操作
    next.click();
});
});