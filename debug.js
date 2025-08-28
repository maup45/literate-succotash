// Debug script for design system
console.log('🔍 Design System Debug Started');

// Check if CSS variables are loaded
function checkCSSVariables() {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    
    const variables = [
        '--navy-950',
        '--navy-900', 
        '--navy-800',
        '--aqua-400',
        '--aqua-500',
        '--aqua-600',
        '--pearl-white'
    ];
    
    console.log('🎨 CSS Variables Check:');
    variables.forEach(variable => {
        const value = computedStyle.getPropertyValue(variable);
        console.log(`${variable}: ${value}`);
    });
}

// Check if JavaScript is working
function checkJavaScript() {
    console.log('⚡ JavaScript Check:');
    console.log('DOM Content Loaded:', document.readyState);
    console.log('Window loaded:', window.performance.timing.loadEventEnd > 0);
}

// Check for any console errors
window.addEventListener('error', function(e) {
    console.error('❌ Error detected:', e.error);
    console.error('File:', e.filename);
    console.error('Line:', e.lineno);
});

// Check CSS loading
function checkCSSLoading() {
    console.log('📄 CSS Loading Check:');
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
        console.log('CSS file:', link.href);
    });
}

// Run all checks when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        checkCSSVariables();
        checkJavaScript();
        checkCSSLoading();
    });
} else {
    checkCSSVariables();
    checkJavaScript();
    checkCSSLoading();
}

console.log('✅ Debug script loaded');
