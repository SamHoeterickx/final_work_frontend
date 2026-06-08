import type { CSSProperties } from 'react';

export const colors = {
    primary: '#465E3C',
    secondary: '#222222',
    background: '#E8DFD3',
    darkBackground: '#D6D0C9',

    text: {
        primary: '#222222',
        secondary: '#FFFFFF',
        muted: '#696969',
        inverted: '#465E3C',
    },

    success: '#',
    warning: '#',
    error: '#A63C3C',

    border: '#465E3C',
    shadow: '#000000',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const borderRadius = {
    sm: 8,
    md: 16,
    lg: 24,
    full: 9999,
};

export const typography = {
    h1: {
        fontFamily: 'Vanguard-DemiBold',
        fontSize: 48,
        color: colors.text.primary,
        textTransform: 'uppercase',
    },
    h2: {
        fontFamily: 'Vanguard-DemiBold',
        fontSize: 36,
        color: colors.text.primary,
        textTransform: 'uppercase',
    },
    h3: {
        fontFamily: 'Vanguard-DemiBold',
        fontSize: 20,
        color: colors.text.primary,
        textTransform: 'uppercase',
    },
    h4: {
        fontFamily: 'Vanguard-Regular',
        fontSize: 20,
        color: colors.text.primary,
        textTransform: 'uppercase',
    },
    body: {
        fontFamily: 'helvetica',
        fontSize: 14,
        color: colors.text.primary,
    },
    bodySmall: {
        fontFamily: 'helvetica',
        fontSize: 14,
        color: colors.text.primary,
    },
    caption: {
        fontFamily: 'helvetica',
        fontSize: 12,
        letterSpacing: 0.3,
        color: colors.text.muted,
    },
    link: {
        fontFamily: 'Vanguard-Regular',
        fontSize: 14,
        color: colors.text.muted,
        textDecoration: 'underline',
        textAlign: 'center',
    },
};

export const shadows = {
    button: {
        boxShadow: `0px 4px 2px rgba(0, 0, 0, 0.25)`,
    },
};

/**
 * BASE STYLES
 */
export const baseStyles: Record<string, CSSProperties> = {
    // Layout
    container: {
        display: 'flex',
        width: '90%',
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },
    safeArea: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.background,
    },
    contentContainer: {
        display: 'flex',
        flex: 1,
        paddingLeft: spacing.lg,
        paddingRight: spacing.lg,
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cHeader: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 64,
    },
    cScrollView: {
        display: 'flex',
        flex: 1,
        width: '100%',
    },
    cAuth: {
        width: '90%',
    },

    logo: {
        width: '65%',
        marginTop: spacing.lg,
    },

    // Typography (Hooks into the typography object above)
    h1: { ...typography.h1 },
    h2: { ...typography.h2 },
    h3: { ...typography.h3 },
    h4: { ...typography.h4 },
    p: { ...typography.body },
    a: { ...typography.link },
    caption: { ...typography.caption },

    inputGroup: {
        display: 'flex',
        marginBottom: spacing.lg,
    },

    errorText: {
        ...typography.bodySmall,
        color: colors.error,
        marginTop: spacing.xs,
        textAlign: 'center',
    },

    wrapper: {},

    // ==================/==================
    // ============BUTTON STYLING===========
    // ==================/==================
    backButton: {
        position: 'absolute',
        left: spacing.md,
        top: 72,
    },

    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,

        paddingLeft: 48,
        paddingRight: 48,
        paddingTop: 24,
        paddingBottom: 24,

        marginTop: 12,
        marginBottom: 12,

        borderRadius: borderRadius.full,
        backgroundColor: colors.primary,
        ...shadows.button,
    },
    secundaryButton: {
        backgroundColor: colors.background,
        borderColor: colors.border,
        borderWidth: 2,
        borderStyle: 'solid',
    },
    xlButton: {
        width: '100%',
    },
    buttonCopy: {
        ...typography.h3,
        color: colors.text.secondary,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    buttonCopySecundary: {
        color: colors.text.inverted,
    },

    // ==================/==================
    // ==========INPUTFIELD STYLING=========
    // ==================/==================
    cInputField: {
        display: 'flex',
        width: '100%',
    },
    inputField: {
        ...typography.body,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: colors.background,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.primary,
        borderRadius: borderRadius.full,
    },
};
