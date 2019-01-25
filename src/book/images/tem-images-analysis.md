# TEM images analysis

## Analysis of TEM images

The image coming out of the SEM microscope is expected to be in TIFF 16 bits. Apparently some software desctroy the image to 8 bits when adding the scale.  


There are 3 steps in order to process your image:

1. Apply a gaussian to the image \(blurring\). Values of 5 to 30 seem reasonable.
2. The second step will generate a mask. The white pixels are the 'positive' area while the black one negative. You may either select one of the provided algorithms or use the 'threshold' algorithm. In this later case the 'Threshold for mask' value will be taken into account. It should be a value between 0 and 100 \(percent of white\).
3. Regions Of Interest \(ROI\) selection tool. You may here select the minimal surface, positive / negative as well as the 'Scale' factor that will be applied to the ROI.

![](https://lh3.googleusercontent.com/7gHHtHzLdhK3lCSw3HRAGA3AJX-LJLDefIkkI3AkqHmIc33APkKAYvzHD_jEFsNN6nOL1xw3ZK7PrZnjWbVnw1kQYSjAbOLqdOFNv_lKl7uldzwFbwNhwMbauVOT-p4UaDPBGVvz)

### Categories

By clicking on the ‘categories’ button you will be able to  
  


### Magnification problems

All the images have 96 dpi  


|  | Magnification | Pixel | nm |
| :--- | :--- | :--- | :--- |
| PI-Ag\_2-2\_0001 | 110000 | 365 | 100 |
| PI-Ag\_2-2\_0002 | 110000 | 365 | 100 |
| PI-Ag\_2-2\_0003 | 42000 | 273 | 200 |
| PI-Ag\_2-2\_0004 | 42000 | 273 | 200 |
| PI-Ag\_2-2\_0005 | 42000 | 273 | 200 |
| PI-Ag\_2-2\_0006 | 67000 | 216 | 100 |
| PI-Ag\_2-2\_0007 | 400000 | 287 | 20 |
| PI-Ag\_2-2\_0008 | 350000 | 235 | 20 |
| PI-Ag\_2-2\_0009 | 220000 | 383 | 50 |
| PI-Ag\_2-2\_0010 | 110000 | 364 | 100 |

The system will also calculate the MBR \([Minimal bounding Rectange](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle)\). The ratio between the surface of the MBR and the surface of the ROI \(Region Of Interest\) is what we call the ‘filling factor’, 100% means a cube, a sphere should be π/4 \(78.5%\)  




