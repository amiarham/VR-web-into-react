/** @format */

import React from "react";

const Right = () => {
  return (
    <div class='right-c'>
      <a-scene
        loading-screen='dotsColor: #865ce2; backgroundColor: #2F3349'
        renderer='antialias: true;
colorManagement: true;
sortObjects: true;
physicallyCorrectLights: true;'
        inspector
        // id='aframe-container'
        embedded>
        <a-entity camera position='0 1.6 0'></a-entity>
        <a-entity
          id='myButton'
          geometry='primitive: plane; width: 2; height: 0.5'
          material='color: #333; shader: flat'
          text='value: Click Me!; align: center; color: #fff'
          position='-3 2 -2'
          event-set__mouseenter='scale: 1.2 1.2 1'
          event-set__mouseleave='scale: 1 1 1'
          event-set__click='scale: 0.8 0.8 1'></a-entity>
        <a-assets>
          <img
            id='pano-1'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_open_architect.jpg?v=1678230790838'
            alt='ho'
          />
          <img
            id='pano-2'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_bank_lounge__i.jpg?v=1678230139947'
            alt='ho'
          />
          <img
            id='pano-3'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_bank_in_the_ca.jpg?v=1678230119589'
            alt='ho'
          />
          <img
            id='pano-4'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_outdoor_open_b-_2_.jpg?v=1678235572569'
            alt='ho'
          />
          <img
            id='pano-5'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_open_bank_and_.jpg?v=1678232372386'
            alt='ho'
          />
          <img
            id='pano-6'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_open_bank_and_(1).jpg?v=1678235652112'
            alt='ho'
          />
          <img
            id='pano-7'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_open_bank_and_%20(1).jpg?v=1678236820022'
            alt='ho'
          />
          <img
            id='pano-8'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/interior_views_futuristic_metaverse_outdoor_open_b-_1_.jpg?v=1678266078914'
            alt='hi'
          />
          <img
            id='logo'
            src='https://cdn.glitch.global/cd14c830-1f5f-47f0-a1df-39d0ea6ad365/logo2.png?v=1678222558354'
            alt='logoo'
          />
        </a-assets>
        <a-sky
          sky-cycle
          src='#pano-1'
          animation='property: rotation; to: 0 360 0; loop: true; dur: 88000; easing: linear'></a-sky>
        <a-entity environment='preset:tron;groundColor:#865ce2;'></a-entity>
        <a-entity
          light='type:ambient;intensity:0.9'
          position='0 2 0'></a-entity>
        <a-entity id='rig' movement-controls='fly:true;'>
          <a-entity
            id='player'
            camera
            position='0 1.6 0'
            look-controls
            auto-detect-controllers
            tracked-controls></a-entity>

          <a-entity
            id='leftHand'
            hand-tracking-controls
            hand-controls='hand: left; handModelStyle: highPoly; color: #865ce2'></a-entity>
          <a-entity
            id='rightHand'
            hand-tracking-controls
            hand-controls='hand: right; handModelStyle: highPoly; color: #865ce2'></a-entity>
        </a-entity>
        <a-image
          src='#logo'
          height='1.5'
          width='1.5'
          position='0 2 -2'></a-image>
        <a-text
          value='Sorrel Banq'
          position='0 0.8 -2'
          color='#865ce2'
          font='kelsonsans'
          align='center'></a-text>
        <a-entity
          position='0 0.5 -2'
          text='value: Coming Soon...; color:#fff; font:kelsonsans; align:center'
          scale='3.5 3.5 0'></a-entity>
      </a-scene>
    </div>
  );
};

export default Right;
