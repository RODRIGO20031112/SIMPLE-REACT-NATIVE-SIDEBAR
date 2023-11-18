from moviepy.editor import VideoFileClip

def video_to_gif(input_video, output_gif, duration=None):
    clip = VideoFileClip(input_video)

    if duration:
        clip = clip.subclip(0, duration)

    clip.write_gif(output_gif, fps=10, opt="nq")

if __name__ == "__main__":
    input_video = "video.mp4"  
    output_gif = "gif.gif"  
    video_to_gif(input_video, output_gif)
