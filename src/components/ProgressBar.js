import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = (props) => {
    const healthBarTextRef = useRef(null);
    const healthBarInnerRef = useRef(null);

    const maxHealth = props.pvMax;
    const currentHealth = props.pv;
    const colorType = props.type === 0 ? "#9fc5e8" : "#dc5858";

    useEffect(() => {
        renderHealthBar();
    }, [currentHealth]);

    const renderHealthBar = () => {
        renderHealthBarSections(100 / maxHealth);
        renderHealthBarText();
    };

    const renderHealthBarSections = (percentage) => {
        const healthBarInner = healthBarInnerRef.current;
        healthBarInner.innerHTML = "";
        const sectionTemplate = `<path class="health-bar__section" d="M0 0" fill="#fff" style="transform: rotate(10deg)" />`;
        const radius = 100;
        const angle = (percentage / 100) * 360 - 1; // healthBarSectionGap
        const radians = (angle - 180) * (Math.PI / 180);
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);
        const largeArc = percentage > 50 ? 1 : 0;
        const d = `M0 0 -100 0 A${radius} ${radius} 0 ${largeArc} 1 ${x} ${y} Z`;

        for (let i = 0; i < currentHealth; i++) {
            const healthBarSection = createHealthBarSectionElement(i);
            healthBarSection.setAttribute("d", d);
            healthBarInner.appendChild(healthBarSection);
        }
    };

    const createHealthBarSectionElement = (index) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("class", "health-bar__section");
        path.setAttribute("fill", colorType);
        path.setAttribute("transform", `rotate(${getSectionRotation(index)}, 0, 0)`);

        return path;
    };

    const getSectionRotation = (index) => {
        return (360 / maxHealth) * index;
    };

    const renderHealthBarText = () => {
        const healthBarText = healthBarTextRef.current;
        healthBarText.innerHTML = currentHealth;
    };

    return (
        <div className="health-bar">
            <svg viewBox="0 0 200 200">
                <g id="healthBarInner" transform="translate(100,100)" ref={healthBarInnerRef}>
                    {/* generated health bar sections will go here */}
                </g>
                <circle cx="100" cy="100" r="80" fill="#222222" />
            </svg>

            <p id="healthBarText" style={{color:colorType}} ref={healthBarTextRef}>{currentHealth}</p>
        </div>
    );
}

export default ProgressBar;
