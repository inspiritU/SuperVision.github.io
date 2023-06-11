# Bikesharing-Management.github.io
2017.03 - 2019.05
# 1 Software Overview
## 1.1 Software Purpose
**SuperVision**  is an intelligent supervision platform for shared bicycles that integrates data collection, big data analysis, real-time monitoring, independent management of parking spots, and comprehensive enterprise management. The platform aims to deeply explore the characteristics of shared bicycle travel in terms of time, space, season, climate, etc., by combining big data analysis and visualization technology. It utilizes cross-analysis to obtain indicators such as the deployment volume of bicycles in different regions and brands, standardized parking rates, and flow rates. The analysis results are presented in visual forms, including real-time heat maps, interactive parking spot opening and closing plans, visual charts, and quarterly reports sent to enterprises. This platform has the advantages of real-time supervision, high visuality, ease of operation, and strong compatibility. Compared to traditional manual management models for community shared bicycles, this platform can effectively improve management efficiency, enhance service effectiveness, significantly reduce management costs, and provide a new choice for unified supervision of multi-brand shared bicycles within communities.

## 1.2 Technical Features
**SuperVision**  uses IntelliJ IDEA as the development platform and mainly utilizes the following technologies: data mining, mathematical and statistical analysis, anomaly detection, and visualization. Modular design is employed for different data mining results. During the UI interface design, considerations are given to the correlation between modules, as well as the convenience, readability, and aesthetics of user operations. The overall system framework is illustrated in the diagram below.

# 2 Environment
## 2.1 Development Language
**SuperVision**  primarily uses HTML5 and CSS as the development languages, collectively known as web frontend development technologies.
Reasons: (1) The significant advantage of HTML5 technology is its ability to support multimedia on smart devices such as smartphones, and it can smoothly achieve version compatibility between low and high versions. (2) CSS3 technology effectively controls the browsing effects of webpage elements such as fonts, backgrounds, borders, colors, layouts, and text effects. It can be written using any text editor, making webpage editing very convenient. CSS3 technology has excellent compatibility across different browsers.
## 2.2 System Support Software
HTML5 technology is supported by the majority of browsers available in the market, such as IE9, Chrome, Firefox, 360 Secure Browser, etc.

## 2.3 Requirements
Listed below are the hardware devices required to run this software, including:
Processor: Intel processor with a frequency of 1GHz or above, Memory capacity: 4GB or above.

# 3 Main Function Introduction
## 3.1 Shared Bicycle Supervision Platform
### 3.1.1 Real-time Monitoring Module
**Real-time monitoring** is the foundation for administrators to achieve fine-grained management of shared bicycles. The real-time monitoring module provides intuitive, interactive, and highly customizable data visualization maps and heat maps. Through this module, administrators can obtain real-time, accurate, and visual information about the spatial distribution characteristics of shared bicycles. Compared to traditional, inefficient manual management methods, the administration becomes more precise and targeted.
![图片1](https://github.com/inspiritU/Bikesharing-Management.github.io/assets/122147020/07dd5c51-68dc-48b4-9271-9ad9ed506820)

### 3.1.2 Parking Management Module
The **Parking Management module** enables dynamic independent opening and closing management of parking spots and is the core module of the supervision platform. This module visualizes both static and dynamic parking spots, allowing administrators to monitor the opening and closing status of each parking spot in real-time and manage them independently. Based on the parking demands in different areas and the principles of opening and closing parking spots (opening dynamic spots when the parking demand exceeds a certain threshold), the system provides optimal opening and closing plans for parking spots. Administrators can refer to these plans and independently open or close parking spots in different areas based on specific circumstances, thereby achieving fine-grained management.
![图片2-2](https://github.com/inspiritU/Bikesharing-Management.github.io/assets/122147020/dc5d6069-af03-42a2-8bbd-526284c2c59c)

### 3.1.3 Vehicle Management Module
The **Vehicle Management module** provides information on the standardized parking of bicycles in all campus areas. When the non-standard parking rate exceeds a certain threshold in an area, the system will issue automatic warnings. Administrators can refer to the provided content and take manual measures, such as relocating the bicycles, based on specific circumstances in each area.
![图片3-2](https://github.com/inspiritU/Bikesharing-Management.github.io/assets/122147020/92fb31d6-51a5-4adc-8977-9d38f250780d)

### 3.1.4 Statistical Analysis Module
The **Statistical Analysis module** utilizes operational big data to extract features related to bicycle travel and parking. It provides rich and targeted visual charts for shared bicycles. Administrators can use the statistical analysis results for demand forecasting, enabling scientific and precise management.
![图片4-2](https://github.com/inspiritU/Bikesharing-Management.github.io/assets/122147020/693d2702-580a-4325-ab98-31c35f044252)

### 3.1.5 Enterprise Management Module
The **Enterprise Management module** offers a unified supervision model for multiple brands of shared bicycles on campus. Based on indicators such as the deployment volume of bicycles for each brand, standardized parking rates, and flow rates, and considering the current development status of shared bicycles, the module comprehensively evaluates the management models for each brand. Administrators can revise the management plans for the next quarter based on the quarterly reports.
![图片5-2](https://github.com/inspiritU/Bikesharing-Management.github.io/assets/122147020/738bab64-2a29-461f-86f4-4e4fdb193a68)

## 3.2 Parking Guide User Interface
**The Parking Guide User Interface** for shared bicycles provides functions such as nearby parking spot indicators and orderly parking guidance. This application platform is designed for shared bicycle users and incorporates orderly parking guidance features into existing shared bicycle apps. Users can use this platform to find the specific locations of standardized parking areas on campus. If a user parks a bicycle within a standardized parking area and clicks the "End Ride" button, a "Good! Properly parked" dialog box will appear to confirm the end of the trip. Otherwise, a dialog box with the message "Are you sure you want to end the trip in a non-standard parking area?" will appear, along with options such as "No, I want to park properly" and illustrative images of proper parking, encouraging users to park their bicycles correctly.
![图片6](https://github.com/inspiritU/Bikesharing-Management.github.io/assets/122147020/3f878419-ec5c-4299-be3b-10a507441f5e)

