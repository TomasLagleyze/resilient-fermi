import cv2
import os

video_path = r"videos_temp\IMG_8457.MOV"
output_dir = r"extracted_frames_dense"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Extract 1 frame every 0.5 seconds (every ~30 frames)
step = max(1, int(fps * 0.5))
frame_count = 0
saved_count = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    if frame_count % step == 0:
        filename = os.path.join(output_dir, f"frame_{saved_count+1:02d}.jpg")
        cv2.imwrite(filename, frame, [cv2.IMWRITE_JPEG_QUALITY, 95])
        print(f"Saved {filename} at frame {frame_count} ({frame_count/fps:.1f}s)")
        saved_count += 1
        
    frame_count += 1

cap.release()
print(f"Done! Saved {saved_count} frames to {output_dir}")
