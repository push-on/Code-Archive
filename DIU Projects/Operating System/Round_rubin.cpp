#include <bits/stdc++.h>

using namespace std;

int main()
{
    int i, n, time, remain, done = 0, time_quantum;

    int Process[10], burst_time[10], turnaround_time[10], waiting_time[10];

    float avg_wt = 0, avg_TA = 0;

    printf("Input the number of process:");
    scanf("%d", &n);

    remain = n;

    printf("Please Input the burst time: \n");
    for (i = 0; i < n; i++)
    {
        cout << "P[" << i + 1 << "]=";
        cin >> Process[i];

        burst_time[i] = Process[i];
    }

    printf("Please Input the Quantum:");
    scanf("%d", &time_quantum);

    time = 0;
    i = 0;
    while (remain != 0)
    {
        if (burst_time[i] <= time_quantum && burst_time[i] > 0)
        {
            time = time + burst_time[i];
            burst_time[i] = 0;
            done = 1;
        }
        else if (burst_time[i] > 0)
        {
            time = time + time_quantum;
            burst_time[i] -= time_quantum;
        }

        if (burst_time[i] == 0 && done == 1)
        {
            remain--;
            turnaround_time[i] = time;
            cout << time << endl;
            waiting_time[i] = turnaround_time[i] - Process[i];
            done = 0;
        }
        if (i == n - 1)
            i = 0;
        else
            i++;
    }

    waiting_time[0] = 0;

    for (i = 0; i < n; i++)
    {
        printf("Waiting Time of Process[%d]=%d\n", i + 1, waiting_time[i]);
        avg_wt += waiting_time[i];
    }
    printf("Average Waiting time= %f\n", (avg_wt / n));

    for (i = 0; i < n; i++)
    {
        printf("TurnAround Time of Process[%d]=%d\n", i + 1, turnaround_time[i]);
        avg_TA += turnaround_time[i];
    }

    printf("Average TurnAround time= %f\n", (avg_TA / n));
}