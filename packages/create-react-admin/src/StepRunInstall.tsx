import React, { useEffect } from 'react';
import { Text } from 'ink';
import { ProjectConfiguration } from './ProjectState.js';
import { useInstallDeps } from './useInstallDeps.js';
import { useRunFormatter } from './useRunFormatter.js';

export const StepRunInstall = ({
    config,
    onCompleted,
}: {
    config: ProjectConfiguration;
    onCompleted: (value: any) => void;
}) => {
    const installDeps = useInstallDeps();
    const runFormatter = useRunFormatter();

    useEffect(() => {
        installDeps(config).then(() => {
            runFormatter(config).then(() => {
                onCompleted({});
            });
        });
        // Disabled as we want to run this only once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Text>Installing dependencies...</Text>;
};
