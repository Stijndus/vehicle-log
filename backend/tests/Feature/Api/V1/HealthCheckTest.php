<?php

namespace Tests\Feature\Api\V1;

use Tests\TestCase;

class HealthCheckTest extends TestCase
{
    public function test_health_endpoint_returns_ok_status(): void
    {
        $response = $this->getJson('/api/v1/health');

        $response
            ->assertOk()
            ->assertExactJson([
                'status' => 'ok',
            ]);
    }
}
