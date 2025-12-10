import React, { useRef, useEffect, useState } from "react";
import './css/products.css';
import gsap from 'gsap';

const Products = () => {
    const trackRef = useRef(null);
    const prevPercentageRef = useRef(0);
    const startXRef = useRef(0);
    const isDownRef = useRef(false);
    const [showHint, setShowHint] = useState(false);
    const hintRef = useRef(null);
    const hidingHintRef = useRef(false);

    // dismiss hint and remember that user has seen it
    const dismissHint = () => {
        try { localStorage.setItem('swipeHintSeen', '1'); } catch (err) { }
        // if already hiding or not shown, ensure state cleared
        if (!showHint || hidingHintRef.current) return;
        const el = hintRef.current;
        if (el) {
            hidingHintRef.current = true;
            gsap.to(el, {
                duration: 0.45,
                opacity: 0,
                y: 12,
                ease: 'power2.out',
                onComplete: () => {
                    hidingHintRef.current = false;
                    setShowHint(false);
                }
            });
        } else {
            setShowHint(false);
        }
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const images = track.getElementsByClassName('image');

        // show hint on touch devices if user hasn't seen it
        try {
            const isTouch = (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || ('ontouchstart' in window);
            const seen = localStorage.getItem('swipeHintSeen');
            if (isTouch && !seen) setShowHint(true);
        } catch (err) { /* ignore */ }

        const applyPercentage = (next) => {
            // clamp
            next = Math.max(Math.min(next, 100), 0);

            // Animate track transform with GSAP
            gsap.to(track, {
                duration: 0.8,
                ease: 'power3.out',
                css: { transform: `translate(${next}%, -50%)` }
            });

            // Parallax for images: animate their object-position (inverted)
            for (const img of images) {
                gsap.to(img, {
                    duration: 0.8,
                    ease: 'power3.out',
                    css: { objectPosition: `${-next + 100}% center` }
                });
            }

            track.dataset.percentage = String(next);
            prevPercentageRef.current = next;
        };

        const onPointerDown = (e) => {
            // hide hint on first interaction
            dismissHint();
            isDownRef.current = true;
            startXRef.current = e.clientX;
            track.setPointerCapture && track.setPointerCapture(e.pointerId);
        };

        const onPointerMove = (e) => {
            if (!isDownRef.current) return;
            // compute movement so dragging right increases percentage (left→right)
            const mouseDelta = e.clientX - startXRef.current;
            const maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * 100; // range roughly -100..100
            let next = prevPercentageRef.current + percentage; // baseline + delta

            applyPercentage(next);
        };

        const onPointerUp = (e) => {
            isDownRef.current = false;
            try { track.releasePointerCapture && track.releasePointerCapture(e.pointerId); } catch (err) { }
        };

        // Wheel / scroll handler: support horizontal scroll (trackpad/wheel) to pan the gallery
        const onWheel = (e) => {
            // capture horizontal delta if available, otherwise vertical (common on touchpads)
            const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
            // sensitivity factor; adjust to taste
            const sensitivity = 0.5;
            const percentageDelta = -(delta / window.innerWidth) * 100 * sensitivity; // negative because wheel right should increase next

            const next = prevPercentageRef.current + percentageDelta;
            applyPercentage(next);

            // prevent default scrolling when over the track to avoid page scroll
            // hide hint on scroll interaction
            dismissHint();
            e.preventDefault();
        };

        track.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
        // use passive: false so we can preventDefault
        track.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            track.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            window.removeEventListener('pointercancel', onPointerUp);
        };
    }, []);

    return (
        <div>
            <h1 style={{ marginTop: 100, left: '30vw' }}>Our Products</h1>
            <section className="products-section">
                <div style={{ right: 0 }} ref={trackRef} data-prev-percentage="0" data-mouse-down-at='0' id="image-track" role="region" aria-label="Product images">
                    <img className="image" src="https://cdn.pixabay.com/photo/2023/02/06/18/33/mixed-fruits-7772552_1280.jpg" draggable='false' alt="product 1" />
                    <img className="image" src="https://sustainhealth.fit/wp-content/uploads/2024/06/Seed-oils.jpg" draggable="false" alt="product 2" />
                    <img className="image" src="https://delicious-usa.com/wp-content/uploads/2021/07/Visuals-Pitch-5-1220x792.jpg" draggable="false" alt="product 3" />
                    <img className="image" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11435/b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg" draggable="false" alt="product 4" />
                    <img className="image" src="https://news.okstate.edu/articles/agricultural-sciences-natural-resources/images/dietary_supplement_banner.jpg" draggable="false" alt="product 5" />
                    <img className="image" src="https://news.okstate.edu/articles/agricultural-sciences-natural-resources/images/dietary_supplement_banner.jpg" draggable="false" alt="product 6" />
                </div>
                {showHint && (
                    <div className="swipe-hint" ref={hintRef} aria-hidden>
                        Swipe horizontally
                    </div>
                )}
            </section>
        </div>
    );
}

export default Products;
