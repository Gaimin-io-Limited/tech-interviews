#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the directory where the script is located and go to parent (repo root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

echo "========================================="
echo "Running Tests for All Problems"
echo "========================================="
echo ""

total_passed=0
total_failed=0
total_suites=0
failed_problems=()

for i in {01..10}; do
    problem_dir="problem-$i/ts"

    if [ -d "$problem_dir" ]; then
        echo -n "Problem $i: "

        # Run tests and capture output
        output=$(cd "$problem_dir" && npm test 2>&1)

        # Extract test results
        if echo "$output" | grep -q "Tests:"; then
            # Parse the test summary line
            test_line=$(echo "$output" | grep "Tests:")

            # Extract numbers
            passed=$(echo "$test_line" | grep -oP '\d+(?= passed)' || echo "0")
            failed=$(echo "$test_line" | grep -oP '\d+(?= failed)' || echo "0")
            total=$(echo "$test_line" | grep -oP '\d+(?= total)' || echo "0")

            # Default to 0 if empty
            passed=${passed:-0}
            failed=${failed:-0}
            total=${total:-0}

            total_passed=$((total_passed + passed))
            total_failed=$((total_failed + failed))
            total_suites=$((total_suites + 1))

            if [ "$failed" -gt 0 ]; then
                echo -e "${YELLOW}$passed passed, $failed failed${NC} (total: $total)"
                failed_problems+=("$i")
            else
                echo -e "${GREEN}All $passed tests passed${NC}"
            fi
        else
            echo -e "${RED}Error running tests${NC}"
            failed_problems+=("$i")
        fi
    fi
done

echo ""
echo "========================================="
echo "Summary"
echo "========================================="
echo "Total Test Suites: $total_suites"
echo -e "Total Tests Passed: ${GREEN}$total_passed${NC}"
if [ "$total_failed" -gt 0 ]; then
    echo -e "Total Tests Failed: ${RED}$total_failed${NC}"
    echo ""
    echo "Problems with failures: ${failed_problems[*]}"
else
    echo -e "${GREEN}All tests passed!${NC}"
fi
