<template>
    <nav class="details-navbar">
        <div class="navbar-content">
            <!-- Left Section - Back Button -->
            <button class="nav-button back-button" @click="$emit('back')" aria-label="Go back">
                <svg class="nav-icon" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <!-- Center Section - Title -->
            <h1 class="page-title">
                {{ title }}
            </h1>

            <!-- Right Section - Favorite Button -->
            <button class="nav-button favorite-button" @click="$emit('favorite')"
                :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'">
                <svg class="nav-icon" viewBox="0 0 24 24">
                    <path :fill="isFavorite ? 'currentColor' : 'none'"
                        :stroke="isFavorite ? 'currentColor' : 'currentColor'" stroke-width="1.5"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
});


defineEmits(['back', 'favorite']);
</script>

<style scoped>
h1 {
    padding: 0;
    margin: 0;
}
.details-navbar {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1000;
}

.navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    height: 60px;
}

.nav-button {
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    color: #333;
    transition: all 0.2s ease;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-button:hover {
    background: #f5f5f5;
}

.nav-button:active {
    transform: scale(0.95);
}

.nav-icon {
    width: 24px;
    height: 24px;
}

.page-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
    text-align: center;
}

.favorite-button {
    color: var(--favorite-color, #e91e63);
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar-content {
        padding: 0.75rem;
        height: 56px;
    }

    .page-title {
        font-size: 1.1rem;
        max-width: 50%;
    }

    .nav-icon {
        width: 22px;
        height: 22px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 1rem;
        max-width: 40%;
    }
}
</style>